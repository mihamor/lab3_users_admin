const ACCOUNT_LEVEL = {
  USER: -1,
  SUPERADMIN: 1,
  ADMIN: 2
}

export const isSuperAdmin = (user) => {
  if (!user?.accountLevel) return false
  const level = parseInt(user.accountLevel)
  console.log(level)
  return level === ACCOUNT_LEVEL.SUPERADMIN
}
