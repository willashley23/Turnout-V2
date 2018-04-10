class Unauthorized extends Error {
  constructor(message) {
    super(message);     
    this.name = "UnauthorizedError";
    this.statusCode = 401;
  }
}

class UnprocessableEntity extends Error {
  constructor(message) {
    super(message);
    this.name = "UnprocessableEntityError";
    this.statusCode = 422;
  }
}

class BadRequest extends Error {
  constructor(message) {
    super(message);     
    this.name = "BadRequestError";
    this.statusCode = 400;
  }
}