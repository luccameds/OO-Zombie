import Image from 'next/image';
import { cards } from '../../constants/cards';

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center bg-black h-32">
        <img src="/logo.png" alt="logo" className="w-1/4" />
      </div>
      <main className="flex flex-col items-center justify-between bg-[#101010]">
        <div className="flex flex-row items-center text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left justify-between my-10">
          <div className="flex flex-col items-center justify-center">
            <div className="border-green-400 border-[1px] bg-green-500/10 p-10 rounded-3xl w-4/5">
              <p className="font-light w-full">
                Bem-vindo a um mundo de mistério e trevas, onde os Caminhos
                Sombrios guardam segredos ancestrais e criaturas sombrias
                espreitam nas sombras. Embarque em uma jornada épica como o
                personagem principal, um aventureiro destemido, cujo destino é
                enfrentar uma horda implacável de mobs malévolos que emergiram
                de antigas criptas e locais amaldiçoados.
              </p>
            </div>
            <a
              className="bg-green-400 text-black font-bold my-10 py-5 px-10 rounded-2xl"
              href="https://github.com/G0ndim/UNB-OO/tree/main/Projetos/TerminalInvaders"
            >
              Saiba mais
            </a>
          </div>
          <img
            src="/shooter.svg"
            alt="ellipses"
            className="right rounded-full w-1/2 max-md:hidden"
          />
        </div>
        <div className="flex flex-row justify-center items-center my-10 max-md:flex-col">
          {cards.map((item, i) => (
            <div
              key={i}
              className="card bg-black/40 rounded-xl shadow-md overflow-hidden mx-5 w-1/4 max-md:w-4/5 my-3"
            >
              <div className="p-6">
                <h2 className="font-bold text-xl mb-2 text-white">
                  {item.title}
                </h2>
                <p className="text-gray-300 text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
