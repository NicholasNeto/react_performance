
## Notas


## Memo
Uma forma de auxiliar o algoritimo de reconciliação do React. 
Com o Memo você consegue indicar qual momento ele deve criar uma nova versão do componente e também consegue indicar quando deve comparar com a versão anterior. Otimizando a performace do React. 

Recebe um segundo parameto, e faz um shallow compare.  
A escolha da propriedade de comparação deve ser utilizada com cuidado. 

Quando utilizar
1. Pure Functional Components
2. Renders too often
3. Re-renders with same props
4. Medium to big size

```bash
export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    prevProps.id === nextProps.id
})
```


## useMemo
Utilizando o useMemo dentro de uma lista por exemplo, cada rederinzação do componente ao criar o totalPrice ele garante que tenha sempre a mesma referencia, isso auxilia no lgoritmo de reconciliação do React, evitando re-renderizações desnecessarias. 

Quando utilizar: 
1. Calculos pesados
2. Igualdade referencial (quando a gente repassa aquela informação a um componente filho)


```bash

const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
        return total + product.price;
    }, 0)
}, [results])

```

## useCallback  
Somente para functions, isso evita que 
toda vez que fizermos Prop Drilling seja feito 
o re-render do component SearcResult,  porque 
semrpe estaremos passando a mesma referencia. 

```bash

const addToWishList = useCallback(async (id: number) => {
    console.log(id)
}, [])

```
## Formatação de dados:


```bash
 async function handleSubmit(event: FormEvent) {
    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const products = data.map(product => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price),
      }
    })

    const totalPrice = data.reduce((total:number, product:any) => {
      return total + product.price;
    }, 0)
  }
```

Legal, aprendemos sobre o useMemo, mas melhor do que ficar utilizando useMemo para calcular dados, melhor ainda
é formatar ou calcular dados no momento da requisição, assim elas geralmente serão feitas uma unica vez. 
No exemplo acima temos o calculo do total price e principalmente temos a criação e formatação do campo priceFormatted 
realizado somente uma vez. 

