import { useState, useEffect } from "react";

const Citacao = ({ texto, autor }) => {
    const [traducao, setTraducao] = useState("");

    async function traduzirCitacao(idioma) {
        try {
            const resposta = await fetch("https://libretranslate.de/translate", {
                method: "POST",
                body: JSON.stringify({
                        q: texto,
                        source: "pt",
                        target: idioma,
                }),
                headers: { "Content-Type": "application/json" },
            });


            const data = await resposta.json()

            setTraducao(data.translatedText);
        } catch (error) {
            console.log("Erro ao traduzir");
        }
    }

    useEffect(() => {
        setTraducao("");
    }, [texto] );

    return (
        <div>
            <blockquote className="blockquote">
                <p>{traducao ? traducao :texto}</p>
                <footer className="blockquote-footer">{autor}</footer>
            </blockquote>
            <button className="btn btn-primary mr-1" onClick={() => traduzirCitacao("en")}>Traduzir para o inglês</button>
            <button className="btn btn-secondary m-1" onClick={() => traduzirCitacao("es")}>Traduzir para o espanhol</button>
        </div>
    );
};

export default Citacao;