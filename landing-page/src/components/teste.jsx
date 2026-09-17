function Perfil() {
    const nome = "Laura";
    const idade = 18;

    return(
        <div>
            <h2>{nome}</h2>
            <p>Idade: {idade}</p>
            <p>Próximo ano: {idade + 1}</p>
        </div>
    );
}