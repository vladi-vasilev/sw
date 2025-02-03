type KeyValuePairProps = {
    keyVal: string,
    value: string
}

const KeyValuePair = ({keyVal, value}: KeyValuePairProps) => {
  return (
    <div style={{ display: "flex", padding: "4px 12px"}}>
      <p style={{width: "100%", fontWeight: "bold", textTransform: "capitalize", color: "#b3b3b3"}}>{keyVal}:</p><p style={{width: "100%"}}>{value}</p>
    </div>
  )
}

export default KeyValuePair