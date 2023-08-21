//01
arraySalarios = [950, 1000, 1100, 1200, 1500, 1600, 1900, 2100, 2500, 3000]

const novosSalarios = arraySalarios.map(elemento =>{
    if (elemento<=2000){
        return elemento*1.15

    }
    else{
        return elemento*1.10

    }
}    
)

console.log(novosSalarios)
//02
const salariosSuperioresA2500 = novosSalarios.filter(salario => salario > 2500);
console.log(salariosSuperioresA2500)

//03
const somaSalariosA2500 = salariosSuperioresA2500.reduce((total, salario) => total + salario, 0);
console.log(somaSalariosA2500)

const somaTotalSalarios = novosSalarios.reduce((total, salario) => total + salario, 0);
console.log(somaTotalSalarios)

