const countries = [
  { name: "Colombia", code: "+57", flag: "🇨🇴" },
  { name: "España", code: "+34", flag: "🇪🇸" },
  { name: "EEUU", code: "+1", flag: "🇺🇸" },
  { name: "México", code: "+52", flag: "🇲🇽" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" }
];

const select = document.getElementById("country");

countries.forEach(c => {
  const option = document.createElement("option");
  option.textContent = `${c.flag} ${c.name} ${c.code}`;
  option.value = c.code;
  select.appendChild(option);
});