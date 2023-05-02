import "../stylesheets/main.css";

type CheckboxProps = {
  label: string;
  state: boolean;
  onChange: () => void;
};

export const Checkbox = ({ label, state, onChange }: CheckboxProps) => (
  <div className="checkbox-item">
    <div className="checkbox-container">
      <input
        className="checkbox-input"
        type="checkbox"
        id={`custom-checkbox-${label}`}
        name={label}
        value={label}
        checked={state}
        onChange={onChange}
      />
      <label className="checkbox-label" htmlFor={`custom-checkbox-${label}`}>
        {label}
      </label>
    </div>
  </div>
);
