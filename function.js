function clearInput() {
	$('.inputDisplay').val('');
}

function result() {
	const operators = /[*+\/-]/;
	let currentValue = $('.inputDisplay').val();
	let length = currentValue.length;
	let lastCharacter = currentValue[length - 1];

	if (!lastCharacter.match(operators))
		$('.inputDisplay').val(eval($('.inputDisplay').val()));
}

function insertCharacter(char) {
	const operators = /[*+\/-]/;
	let currentValue = $('.inputDisplay').val();
	let length = currentValue.length;
	let lastCharacter = currentValue[length - 1];
	let isOperator = false;

	if (char.match(operators)) isOperator = true;
	if (
		(length === 0 && isOperator) ||
		(length > 0 && isOperator && lastCharacter.match(operators))
	)
		return;

	$('.inputDisplay').val($('.inputDisplay').val() + char);
}
