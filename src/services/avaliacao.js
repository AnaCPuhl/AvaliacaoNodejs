class ServicesAvaliacao {
    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número')
        }
        return Number(num1) + Number(num2);
    }

    Sub(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número')
        }
        return Number(num1) - Number(num2);
    }

    Mult(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número')
        }
        return Number(num1) * Number(num2);
    }

    Divi(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número')
        }
        return Number(num1) / Number(num2);
    }

}

module.exports = new ServicesAvaliacao()