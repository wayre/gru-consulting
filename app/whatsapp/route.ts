import { redirect } from "next/navigation";

export async function GET() {
  // Redireciona o usuário para o link do WhatsApp com a mensagem padrão de contato da Gru Consulting
  redirect(
    "https://wa.me/5511933773656?text=Ol%C3%A1%2C%20Maur%C3%ADcio%21%20Tudo%20bem%3F%0A%0AConheci%20a%20Gru%20Consulting%20pelo%20site%20e%20gostaria%20de%20entender%20melhor%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20empresa%20nas%20opera%C3%A7%C3%B5es%20de%20com%C3%A9rcio%20exterior.%20Quando%20tiver%20um%20momento%2C%20podemos%20conversar%3F"
  );
}
