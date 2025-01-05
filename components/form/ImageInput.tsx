import { Label } from "../ui/label";
import { Input } from "../ui/input";

function ImageInput({ name }: { name: string }) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Input id={name} name={name} type="file" accept="image/*" />
    </div>
  );
}
export default ImageInput;
