function addEndereco(endereco) {
    //descontruindo o objeto
    const { cidade: municipio, estado } = endereco;

    const novoEndereco = {
            municipio,
            estado,
            pais: 'Brasil'
        }
        //variavel em strings
    console.log(`${novoEndereco.municipio}, ${novoEndereco.estado}, ${novoEndereco.pais}`);
}
addEndereco({ cidade: 'Campina Grande', estado: 'Paraiba' });