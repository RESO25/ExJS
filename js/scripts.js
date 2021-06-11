function ex1()
{
    var n1 = document.getElementById("nbrAntDps").value;
    console.log(n1);

    var suc = parseFloat(n1) + 1;
    var ant = parseFloat(n1) - 1;

    console.log(suc);
    console.log(ant);

    if (n1 == "")
    {
        document.getElementById("txtResp1").innerHTML = "Digite um valor.";
        document.getElementById("txtResp2").innerHTML = "";
    }
    else
    {
    document.getElementById("txtResp1").innerHTML = "O antecessor é: " + ant + ".";

    document.getElementById("txtResp2").innerHTML = "O sucessor é: " + suc + ".";
    }

}

function ex2()
{

    vl = document.getElementById("nbrPercent").value;

    if (vl == "")
    {
        document.getElementById("txtEx2").innerHTML = "Digite um valor.";
    }

    else
    {
            

        percentual = parseFloat((vl/100)*9);
    
        console.log(percentual);
    
        valor = parseFloat(vl) - percentual;
    
        console.log(valor);

        document.getElementById("txtEx2").innerHTML = "O valor com desconto é: R$" + valor + ".";
    }
}

function ex3()
{
    v1 = document.getElementById("nbrDiv1").value;
    v2 = document.getElementById("nbrDiv2").value;

    if (v1 == "")
    {
        document.getElementById("txtEx3").innerHTML = "Digite o valor 1.";
    }
    else
    {
        if (v2 == "")
        {
            document.getElementById("txtEx3").innerHTML = "Digite o valor 2."
        }
        else
        {
            divisão = parseFloat(v2)/parseFloat(v1);

            console.log(divisão);

            document.getElementById("txtEx3").innerHTML = "O resultado da divisão é: " + divisão + ".";
        }
    }
}

function ex4()
{
    lucro = document.getElementById("nbrLuc").value;
    impostos = document.getElementById("nbrImp").value;
    preço = document.getElementById("nbrPrc").value;

    if (preço == "")
    {
        document.getElementById("txtLuc").innerHTML = "Digite o preço de fábrica.";
        document.getElementById("txtImp").innerHTML = "";
        document.getElementById("txtPrc").innerHTML = "";
    }
    else
    {
        if (lucro == "")
        {
            document.getElementById("txtLuc").innerHTML = "Digite o lucro do distribuidor.";
            document.getElementById("txtImp").innerHTML = "";
            document.getElementById("txtPrc").innerHTML = "";
        }
        else
        {
           if (impostos == "")
           {
            document.getElementById("txtLuc").innerHTML = "Digite os impostos.";
            document.getElementById("txtImp").innerHTML = "";
            document.getElementById("txtPrc").innerHTML = "";
           }
           else
           {
                lucroTotal = parseFloat(preço)/100 * parseFloat(lucro);
                
                console.log(lucroTotal);
                
                document.getElementById("txtLuc").innerHTML = `O lucro obtido sobre o veículo é de: R$${lucroTotal}.`;

                impostoTotal = parseFloat(preço)/100 * parseFloat(impostos);

                console.log(impostoTotal);

                document.getElementById("txtImp").innerHTML = `Os impostos sobre esse veículo são de: R$${impostoTotal}.`

                preçoTotal = parseFloat(preço) + lucroTotal + impostoTotal;
                console.log(preçoTotal);
                document.getElementById("txtPrc").innerHTML = `O preço total a ser pago pelo veículo é de R$${preçoTotal}.`;
           }
        }
    }
}

function ex5()
{
    peso = document.getElementById("nbrPeso").value;
    altura = document.getElementById("nbrAltura").value;

    if (peso == "")
    {
        document.getElementById("txtEx5").innerHTML = "Digite seu peso.";
        document.getElementById("saúde").innerHTML = "";
    }
    else
    {
        if (altura == "")
        {
            document.getElementById("txtEx5").innerHTML = "Digite sua altura."
            document.getElementById("saúde").innerHTML = "";
        }
        else
        {
            imc = parseInt(peso)/(parseFloat(altura)*parseFloat(altura));
            imc = parseFloat(imc.toFixed(2));
            
            console.log(imc);

            document.getElementById("txtEx5").innerHTML = "Seu IMC é: " + imc + ".";

            if (imc<20)
            {
                document.getElementById("saúde").innerHTML = "Abaixo do peso.";
            }
            else
            {
                if (imc<25)
                {
                    document.getElementById("saúde").innerHTML = "Peso ideal."
                }
                else
                {
                    document.getElementById("saúde").innerHTML = "Acima do peso."
                }
            }
        }
    }
}

function ex6()
{
    n1 = document.getElementById("nbrNota1").value;
    n2 = document.getElementById("nbrNota2").value;

    if (n1 == "")
    {
        document.getElementById("txtEx6").innerHTML = "Digite a 1ª nota.";
    }
    else
    {
        if (n2 == "")
        {
            document.getElementById("txtEx6").innerHTML = "Digite a 2ª nota.";
        }
        else
        {
            media = (parseFloat(n1) + (parseFloat(n2)*2))/3;
            media = parseFloat(media.toFixed(2));
            
            console.log(media);
            
            if (media>4)
            {
                document.getElementById("txtEx6").innerHTML = "Aprovado!";
            }
            else
            {
                document.getElementById("txtEx6").innerHTML = "Reprovado.";
            }
        }
    }
}

function ex7()
{
    n = document.getElementById("nbrNota").value;

    if (n == "")
    {
        document.getElementById("txtEx7").innerHTML = "Digite a 1ª nota.";
    }
    else
    {
        n2 = 15-parseFloat(n);
        console.log(n2);
        n1 = parseFloat(n2)/2;
        console.log(n1);

        document.getElementById("txtEx7").innerHTML = "O aluno precisa tirar uma nota de, no mínimo, " + n1 + " para ser aprovado.";
    }
}