import { TypesForm } from '../utils/validation/validate';

export interface UpdatedForm extends Omit<TypesForm, 'image'> {
  image: string | null;
}

export interface FormSliceState {
  forms: UpdatedForm[];
}
