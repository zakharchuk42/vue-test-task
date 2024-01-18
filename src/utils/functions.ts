export function phoneFormatter(phone: string): string {
	return `${phone.slice(0,1)}-${phone.slice(1,4)}-${phone.slice(4,7)}-${phone.slice(7)}`
}
