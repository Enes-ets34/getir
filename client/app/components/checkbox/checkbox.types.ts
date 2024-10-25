export interface CheckboxProps {
    checked: boolean;
    disabled?: boolean;
    description?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id?:string
  }