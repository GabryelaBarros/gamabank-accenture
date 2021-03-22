const { NewExpenseRequestDTO, NewExpenseResponseDTO } = require('../api/models/dto/newexpense.dto')
const { NewUserRequestDTO, NewUserResponseDTO } = require('../api/models/dto/newuser.dto')
const { LoginRequestDTO, LoginResponseDTO } = require('../api/models/dto/auth.dto')
const { BadRequestDTO } = require('../api/models/dto/badrequest.dto')
const { StatementResponseDTO } = require('../api/models/dto/statement.dto')
const {
    InvoiceRequestDTO,
    InvoiceResponseDTO,
    NotFoundCCResponseDTO
} = require('../api/models/dto/invoice.dto')

const expenses = {
    tags: ['api'],
    description: 'creating a new expense',
    notes: 'returns a success or failure message when creating a new expense',
    validate: {
        payload: NewExpenseRequestDTO
    },
    response: {
        status: {
            201: NewExpenseResponseDTO,
            400: BadRequestDTO,
            406: NewExpenseResponseDTO
        }
    }
}

const invoice = {
    tags: ['api'],
    description: 'find open invoice by cc number',
    notes: 'returns a list of expenses by a cc number',
    validate: {
        params: InvoiceRequestDTO
    },
    response: {
        status: {
            200: InvoiceResponseDTO,
            400: BadRequestDTO,
            404: NotFoundCCResponseDTO
        }
    }
}

const statement = {
    tags: ['api'],
    description: 'find statements by cc number',
    notes: 'returns a list statements by a cc number',
    validate: {
        params: InvoiceRequestDTO
    },
    response: {
        status: {
            200: StatementResponseDTO,
            400: BadRequestDTO,
            404: NotFoundCCResponseDTO
        }
    }
}

const signup = {
    tags: ['api'],
    description: 'creating a new user',
    notes: 'returns a success or failure message when creating a new user',
    validate: {
        payload: NewUserRequestDTO
    },
    response: {
        status: {
            201: NewUserResponseDTO,
            400: BadRequestDTO,
            406: NewUserResponseDTO,
            409: NewUserResponseDTO
        }
    }
}

const login = {
    tags: ['api', 'login'],
    description: 'Authentication route',
    notes: 'Anotações da rota...',
    validate: {
        payload: LoginRequestDTO
    },
    response: {
        status: {
            200: LoginResponseDTO,
            400: BadRequestDTO
        }
    }
}

module.exports = { expenses, invoice, statement, signup, login }