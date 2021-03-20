const { NewUserRequestDTO, NewUserResponseDTO } = require('../api/models/dto/newuser.dto')
const {LoginRequestDTO, LoginResponseDTO} = require('../api/models/dto/auth.dto')
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
    notes: 'returns a success or failure message when creating a new user',
    validate: {
        payload: NewUserRequestDTO
    },
    response: {
        status: {
            201: NewUserResponseDTO,
            409: NewUserResponseDTO,
            400: BadRequestDTO
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
            409: NotFoundCCResponseDTO,
            400: BadRequestDTO
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
            409: NotFoundCCResponseDTO
        }
    }
}

const newUser = {
    tags: ['api'],
    description: 'creating a new user',
    notes: 'returns a success or failure message when creating a new user',
    validate: {
        payload: NewUserRequestDTO
    },
    response: {
        status: {
            201: NewUserResponseDTO,
            409: NewUserResponseDTO,
            400: BadRequestDTO
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

module.exports = { expenses, invoice, statement, newUser, login }