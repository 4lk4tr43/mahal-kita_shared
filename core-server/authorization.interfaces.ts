interface Permission {
	allowedIds: Set<string>
	deniedIds: Set<string>
}

interface Role {
	id: string
	created: number
	updated: number
	name: string
	permission: Permission
	priority: number
	isUserRole: boolean
}

interface User {
	id: string
	created: number
	updated: number
	name: string
	roles: Role[]
}

interface AuthorizationStore {
	createUsers(users: User[]): Promise<User[]>
}

export { Permission, Role, User, AuthorizationStore }