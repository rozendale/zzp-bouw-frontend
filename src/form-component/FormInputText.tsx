// src/form-component/FormInputText.tsx
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
// import { FormInputProps } from "./FormInputProps";
export const FormInputText = ({ name, control, label }: any) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};

// Na een lange tijd hard werken in de bouw, waarbij ik niet geleerd had te hoeven verdien ik meer dan met programmeerwerk waaarbij ik veel voor heb gestudeerd en waarbij men altijd moet doorleren.
// Na een lange tijd, op een vrije Sabbat, wanneer jij even slaapt, kan ik me ineens weer in iets duiken wat best ingewikkeld is, maar het is nu wel gelukt!
// Na veel studie tijdens de corona tijd in Vietnam heb ik Django en React geleerd. 
// Bij het ontwerpen kom je vaak op dingen terecht die je moet uitvogelen met hulp van google, soms is het stellen van je vraag al heel moeilijk, maar als je later personeel wilt aansturen of AI die code voor je schrijft, dan moet je wel weten wat je moet vragen.
// Als jij later zelf projecten ontwikkelt, kan ik helpen om problemen op te lossen. 
// Je moet in django een database opbouwen met CRUD (create, read, update, delete) en in react wordt dit bedient. 
// De communicatie gaat via een API, dat is in JSON, en django is in python, en react is in typescript. 
// Hierbij even een update van waar ik ben met CRUD van django naar React: Ik ben bij U, (update).
// Bij update kan je bestaande data updaten, maar als de react pagina wordt geladen, duurt het veel langer om de bestaande data in te laden, dan de frontent styling, dit brengt de errors die ik zonet even gefixt heb:
// met useForm kan men Reaxt laten wachten totdat de data is loaded, maar ik gebruik ook MUI als frontend style, en dan moet TextField worden aangepast en een paar andere ingewikkelde dingen achter de schermen.
// Dit moet je allemaal leren om jezelf later aan te bieden als FrontEnd Developer.
// Ik kan je dat allemaal leren. 
// Dan kan je iets wat heel moeilijk is en waarmee je al snel een goed betaald werk kan doen en waarmee je slim wordt op school.