function submitForm() {
  let input = {};
  const values = $('#form-contato').serializeArray();

  values.forEach(item => input[item.name] = item.value);

  const subject = `${input.nome} - Contato Via Portfolio`;

  window.location.href = `mailto:lucas.fim@gmail.com?subject=${subject}&body=${input.mensagem}`;
}
