type CheckboxProps = {
  label: string;
  state: boolean;
  onChange: () => void;
};

export const Checkbox = ({ label, state, onChange }: CheckboxProps) => (
  <div className="toppings-list-item">
    <div className="left-section">
      <input
        type="checkbox"
        id={`custom-checkbox-${label}`}
        name={label}
        value={label}
        checked={state}
        onChange={onChange}
      />
      <label htmlFor={`custom-checkbox-${label}`}>{label}</label>
    </div>
  </div>
);
