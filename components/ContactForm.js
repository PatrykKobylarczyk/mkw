// LIBS
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <form
      target="_blank"
      onSubmit={onSubmit}
      action="https://formsubmit.co/patryk.kobylarczyk@gmail.com"
      method="POST"
      className="max-w-2xl z-20 mt-10 lg:mx-0 flex flex-col justify-center items-end gap-3"
    >
      <div className="w-full">
        <p className="text-[.6vw] mb-1">Twoje imię i nazwisko</p>
        <input
          className="w-full bg-transparent border-[.5px] border-[#BC9555] font-semibold placeholder-white/70 p-[.5vw]  placeholder:font-light"
          type="text"
          placeholder=""
          {...register("name", {
            required: true,
            maxLength: 100,
          })}
        />
        {errors.name && (
          <p className="text-red mt-1">
            {errors.name.type === "required" && "To pole jest wymagane."}
            {errors.name.type === "maxLength" &&
              "Maksymalna długość to 100 znaków."}
          </p>
        )}
      </div>
      <div className="w-full mt-3">
        <p className="text-[.6vw] mb-1">Twoje adres E-mail</p>
        <input
          className="w-full bg-transparent border-[.5px] border-[#BC9555] font-semibold placeholder-white/70 p-[.5vw]  placeholder:font-light"
          type="text"
          placeholder=""
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <p className="text-red mt-1">
            {errors.email.type === "required" && "To pole jest wymagane."}
            {errors.email.type === "pattern" && "Nieprawidłowy adres e-mail."}
          </p>
        )}
      </div>

      <div className="w-full mt-3">
        <p className="text-[.6vw] mb-1">Wiadomość</p>
        <textarea
          className="w-full bg-transparent border-[.5px] border-[#BC9555] font-semibold placeholder-white/70 p-[.5vw]  placeholder:font-light"
          name="message"
          placeholder=""
          rows="4"
          cols="50"
          {...register("message", {
            required: true,
            maxLength: 2000,
          })}
        />
        {errors.message && (
          <p className="text-red mt-1">
            {errors.message.type === "required" && "To pole jest wymagane."}
            {errors.message.type === "maxLength" &&
              "Maksymalna długość to 2000 znaków."}
          </p>
        )}
      </div>
      <button
        className="w-[16%] p-[.5vw] font-light text-[.8vw] text-[#BC9555]  border-[.5px] border-[#BC9555] hover:bg-[#BC9555] hover:text-black transition duration-300 text-center"
        type="submit"
      >
        wyślij
      </button>
    </form>
  );
};

export default ContactForm;
