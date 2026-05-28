import { auth } from '@/auth'
import EditRoleMobile from '@/components/EditRoleMobile'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import connectDb from '@/lib/db'
import Grocery, { IGrocery } from '@/models/grocery.model'
import User from '@/models/user.model'
import Categories from '@/pages/Categories'
import { redirect } from 'next/navigation'

export default async function CategoriesPage() {
  await connectDb()
  const session = await auth()
  if (!session) redirect('/login')

  const user = await User.findById(session?.user?.id)
  if (!user) redirect('/login')

  const inComplete = !user.mobile || !user.role || (!user.mobile && user.role == 'user')
  if (inComplete) {
    return <EditRoleMobile />
  }

  if (user.role !== 'user') {
    redirect('/')
  }

  const groceryList: IGrocery[] = await Grocery.find({})
  const plainUser = JSON.parse(JSON.stringify(user))
  const plainGrocery = JSON.parse(JSON.stringify(groceryList))

  return (
    <>
      <Nav user={plainUser} />
      <Categories groceryList={plainGrocery} />
      <Footer />
    </>
  )
}
