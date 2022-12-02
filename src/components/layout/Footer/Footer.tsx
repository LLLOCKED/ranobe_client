export const Footer = () => {
  return (
    <footer className='text-[#160C28] bg-[#EFCB68] text-sm'>
      <div className='container mx-auto px-10 py-12 flex flex-col lg:flex-row justify-between items-center'>
          <div>
              <ul className="flex flex-col lg:flex-row text-center lg:space-x-8">
                  <li>Останні новели</li>
                  <li>Популярні новели</li>
                  <li>Нові новели</li>
              </ul>
          </div>
         <div> © {new Date().getFullYear()} RanobeUA.com</div>
      </div>
    </footer>
  )
}