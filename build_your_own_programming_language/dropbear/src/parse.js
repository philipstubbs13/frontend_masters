const { isOpeningParenthesis, isClosingParenthesis } = require('./identify');
const { specialForms } = require('./special-forms');
const { peek, pop } = require('./utilities');

const parenthesize = tokens => {
  const token = pop(tokens);

  if (isOpeningParenthesis(token.value)) {
    const expression = [];

    while (!isClosingParenthesis(peek(tokens).value)) {
      expression.push(parenthesize(tokens));
    }

    pop(tokens);
    return expression;
  }

  return token;
};

const parse = tokens => {
  if (Array.isArray(tokens)) {
    const [first, ...rest] = tokens;
    return {
      type: 'CallExpression',
      name: first.value,
      arguments: rest.map(parse),
    };
  }

  if (tokens.type === 'Number') {
    return {
      type: 'NumericLiteral',
      value: tokens.value,
    };
  }

  if (tokens.type === 'String') {
    return {
      type: 'StringLiteral',
      value: tokens.value,
    };
  }

  if (tokens.type === 'Name') {
    return {
      type: 'Identifier',
      name: tokens.value,
    };
  }
};

module.exports = { parse: tokens => parse(parenthesize(tokens)) };
