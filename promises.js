function leituraAtrasada() { 
    return new Promise((resolve, reject) => {
        if(Math.random() < 0.5) {
            reject('Erro ao ler o arquivo');
        } else { 
            setTimeout(() => {
                resolve('Arquivo lido com sucesso');
            }, 2000);
        }
    });
}

leituraAtrasada().then((res) => {
    console.log(res);
}).then(() => {
    console.log('Outra operação');
}).then(() => {
    console.log('Outra operação');
}).catch((res) => {
    console.log(res);
});
