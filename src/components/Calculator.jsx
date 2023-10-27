import "./Calculator.css";

export default function Calculator({ onChangeProps, userInputProps }) {
  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label>Inisial Investasi</label>
          <input
            type="number"
            value={userInputProps.initialInvestment}
            onChange={(e) => {
              onChangeProps("initialInvestment", e.target.value);
            }}
          />
        </p>
        <p>
          <label>Investasi Tahunan</label>
          <input
            type="number"
            value={userInputProps.annualInvestment}
            onChange={(e) => {
              onChangeProps("annualInvestment", e.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Perkiraan Balik Modal</label>
          <input
            type="number"
            value={userInputProps.expectedReturn}
            onChange={(e) => {
              onChangeProps("expectedReturn", e.target.value);
            }}
          />
        </p>
        <p>
          <label>Durasi</label>
          <input
            type="number"
            value={userInputProps.duration}
            onChange={(e) => {
              onChangeProps("duration", e.target.value);
            }}
          />
        </p>
      </div>
    </form>
  );
}
