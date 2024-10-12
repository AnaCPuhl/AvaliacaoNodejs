const ServicesAvaliacao = require('../src/services/avaliacao')
const { describe, it, expect } = require('@jest/globals')

describe('Testes da função somar: ', () => {
    
    it('Somar dois números positivos', () => {
        const resultado = ServicesAvaliacao.Somar(1, 2);
        expect(resultado).toBe(3)
    })

    it('Somar um número negativo com um positivo', () => {
        const resultado = ServicesAvaliacao.Somar(-1, 2);
        expect(resultado).toBe(1)
    })

    it('Somar um número positivo com um negativo', () => {
        const resultado = ServicesAvaliacao.Somar(1, -2);
        expect(resultado).toBe(-1)
    })

    it('Somar um número negativo com zero', () => {
        const resultado = ServicesAvaliacao.Somar(-1, 0);
        expect(resultado).toBe(-1)
    })
    
    it('Somar zero com um número negativo', () => {
        const resultado = ServicesAvaliacao.Somar(0, -2);
        expect(resultado).toBe(-2)
    })

    it('Somar um número com uma letra', () => {
        const funSomar = () => ServicesAvaliacao.Somar(1, 'a');
        expect(funSomar).toThrow('Informe um número')
    })
    
    it('Somar uma letra com um número', () => {
        const funSomar = () => ServicesAvaliacao.Somar('b', 2);
        expect(funSomar).toThrow('Informe um número')
    })

    describe('Testes da função sub: ', () => {
    
        it('Sub dois números positivos', () => {
            const resultado = ServicesAvaliacao.Sub(2, 1);
            expect(resultado).toBe(1)
        })
    
        it('Sub um número negativo com um positivo', () => {
            const resultado = ServicesAvaliacao.Sub(-1, 2);
            expect(resultado).toBe(-3)
        })
    
        it('Sub um número positivo com um negativo', () => {
            const resultado = ServicesAvaliacao.Sub(1, -2);
            expect(resultado).toBe(-1)
        })
    
        it('Sub um número negativo com zero', () => {
            const resultado = ServicesAvaliacao.Sub(-1, 0);
            expect(resultado).toBe(-1)
        })
        
        it('Sub zero com um número negativo', () => {
            const resultado = ServicesAvaliacao.Sub(0, -2);
            expect(resultado).toBe(-2)
        })
    
        it('Sub um número com uma letra', () => {
            const funSomar = () => ServicesAvaliacao.Sub(1, 'a');
            expect(funSomar).toThrow('Informe um número')
        })
        
        it('Sub uma letra com um número', () => {
            const funSomar = () => ServicesAvaliacao.Sub('b', 2);
            expect(funSomar).toThrow('Informe um número')
        })

        describe('Testes da função mult: ', () => {
    
            it('Mult dois números positivos', () => {
                const resultado = ServicesAvaliacao.Mult(2, 1);
                expect(resultado).toBe(2)
            })
        
            it('Mult um número negativo com um positivo', () => {
                const resultado = ServicesAvaliacao.Mult(-1, 2);
                expect(resultado).toBe(-2)
            })
                    
            it('Mult um número negativo com zero', () => {
                const resultado = ServicesAvaliacao.Mult(-1, 0);
                expect(resultado).toBe(0)
            })
            
            it('Mult uma letra com um número', () => {
                const funSomar = () => ServicesAvaliacao.Mult('b', 2);
                expect(funSomar).toThrow('Informe um número')
            })

            describe('Testes da função divi: ', () => {
    
                it('Divi dois números positivos', () => {
                    const resultado = ServicesAvaliacao.Divi(2, 1);
                    expect(resultado).toBe(2)
                })
            
                it('Divi um número negativo com um positivo', () => {
                    const resultado = ServicesAvaliacao.Divi(-1, 2);
                    expect(resultado).toBe(-0,5)
                })
                
                it('Mult uma letra com um número', () => {
                    const funSomar = () => ServicesAvaliacao.Mult('b', 2);
                    expect(funSomar).toThrow('Informe um número')
                })
            })
        })
    })
})
