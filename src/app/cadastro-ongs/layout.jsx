import CadastroOngs from "@/components/Home/CadastroOngs/CadastroOngs";
import RedesSociais from "@/components/Home/CadastroOngs/RedeSociais";
import CadastroConcluido from "@/components/Home/CadastroOngs/CadastroConcluido";

export default function CadastroOngsLayout() {
    return (
        <>
            <CadastroOngs />
            <RedesSociais />
            <CadastroConcluido />
        </>
    )
}