import { SxProps, TextField as TFMui, Theme, styled } from "@mui/material";

interface TextFieldProps {
  placeholder: string;
  width?: number;
  handleChange?: (e: any) => void;
  sx?: SxProps<Theme> | undefined;
  value?:string;
  name?:string,
}

const TextField = ({
  placeholder,
  width,
  handleChange,
  sx,
  name,
  value
}: TextFieldProps) => {
  const TextFieldCustom = styled(TFMui)`
    fieldset {
      border-radius: 12px;
      padding: 10px;
      width: ${width}px;
    }
  `;
  return (
    <TextFieldCustom
      sx={sx}
      variant="outlined"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={handleChange}
      data-testid="textField"
    ></TextFieldCustom>
  );
};

export default TextField;