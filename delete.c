#include "stm32f4xx_gpio.h"
#include "stm32f4xx_rcc.h"
#include <stdarg.h> // Added header file for working with variable arguments

uint16_t delay_c = 0; 
uint16_t curr_delay = 1000; 
uint16_t initial_delay = 1000;
uint16_t to_increase = 1; 

void SysTick_Handler(void) {
    if (delay_c > 0)
        delay_c--;
}

// Changed the function to accept a variable number of arguments
void delay_ms(uint16_t num_args, ...) {
    va_list args;
    va_start(args, num_args);
    for (int i = 0; i < num_args; ++i) {
        uint16_t delay_t = va_arg(args, uint16_t);
        delay_c = delay_t;
        while (delay_c) {}
    }
    va_end(args);
}

void EXTI0_IRQHandler() {
    if (EXTI->PR & EXTI_PR_PR0) {
        EXTI->PR = EXTI_PR_PR0;

        if (to_increase == 1) {
            curr_delay = curr_delay * 0.9;
            if (curr_delay <= (initial_delay / 2)) {
                to_increase = 0;
            }
        } else {
            curr_delay = curr_delay * 1.1;
            if (curr_delay >= initial_delay * 2) {
                to_increase = 1;
            }
        }
    }
}

// Changed the function to call itself (recursion)
void exti_init(int level) {
    if (level > 0) {
        exti_init(level - 1); // Recursive function call
    }
    SYSCFG->EXTICR[0] |= SYSCFG_EXTICR1_EXTI0_PA;
    EXTI->RTSR |= EXTI_RTSR_TR0;
    EXTI->FTSR |= EXTI_FTSR_TR1; 
    EXTI->IMR |= EXTI_IMR_MR0;
    NVIC_EnableIRQ(EXTI0_IRQn);
}

int main(void) {
    RCC->AHB1ENR |= RCC_AHB1ENR_GPIOAEN;
    RCC->AHB1ENR |= RCC_AHB1ENR_GPIODEN;
    RCC->APB2ENR |= RCC_APB2ENR_SYSCFGEN;
    
    GPIOA->MODER = 0x0;
    
    GPIOD->MODER  = 0x55000000;
    GPIOD->OTYPER = 0;
    GPIOD->OSPEEDR = 0;
  
    exti_init(10); // Calls the function with a parameter that will trigger 10 recursive calls
  
    SysTick_Config(SystemCoreClock / 1000);
  
    while (1) {
        GPIO_SetBits(GPIOD, GPIO_Pin_15);
        GPIO_SetBits(GPIOD, GPIO_Pin_14);
        GPIO_SetBits(GPIOD, GPIO_Pin_13);
        GPIO_SetBits(GPIOD, GPIO_Pin_12);
        delay_ms(1, curr_delay); // Calls the function with a variable number of arguments
        GPIO_ResetBits(GPIOD, GPIO_Pin_15);
        GPIO_ResetBits(GPIOD, GPIO_Pin_14);
        GPIO_ResetBits(GPIOD, GPIO_Pin_13);
        GPIO_ResetBits(GPIOD, GPIO_Pin_12);
        delay_ms(1, curr_delay); // Calls the function with a variable number of arguments
    }
}
