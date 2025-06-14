export type Teacher = {
	id: number
	teacherId: string
	name: string
	email: string
	photo: string
	phone: string
	subjects: string[]
	classes: string[]
	address: string
}

export type Subjects = {
	id: number
	teachers: string[]
	name: string
}
