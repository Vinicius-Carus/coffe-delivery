import { z } from "zod";
import CheckoutInformations from "../../components/Checkout/CheckoutInformations";
import CheckoutForm from "../../components/Checkout/Form";
import { CheckoutStyle } from "./style";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";

const checkoutFormSchema = z.object({
  zipcode: z
    .string()
    .min(8, "O CEP deve ter no minimo 8 caracters")
    .max(9, "O CEP deve ter no maximo 9 caracters"),
  street: z.string().min(1, "Rua é obrigatório"),
  number: z.string().min(1, "Numero é obrigatório"),
  additionalInfo: z.string().optional(),
  district: z.string().min(1, "Bairro é obrigatório"),
  city: z.string().min(1, "Cidade é obrigatório"),
  uf: z
    .string()
    .max(2, "O UF deve ter 2 caracters")
    .min(2, "O UF deve ter 2 caracters"),
  payment: z.enum(["creditCard", "debitCard", "money"], {
    message: "Deve ser um metódo de pagamento permitido",
  }),
});

type FormSchemaType = z.infer<typeof checkoutFormSchema>;

export default function Checkout() {
  const navigate = useNavigate();

  const { setCheckoutDatas } = useContext(CheckoutContext);

  const checkoutFormData = useForm<FormSchemaType>({
    resolver: zodResolver(checkoutFormSchema),
  });

  const { handleSubmit } = checkoutFormData;

  function handleCheckoutFormSubmit(data: FormSchemaType) {
    setCheckoutDatas(data);
    navigate("/success");
  }

  return (
    <CheckoutStyle>
      <FormProvider {...checkoutFormData}>
        <form action="" onSubmit={handleSubmit(handleCheckoutFormSubmit)}>
          <div className="checkout-body">
            <CheckoutForm />
            <CheckoutInformations />
          </div>
        </form>
      </FormProvider>
    </CheckoutStyle>
  );
}
