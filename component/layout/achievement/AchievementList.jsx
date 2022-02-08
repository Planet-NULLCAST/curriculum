import moment from "moment"

const AchievementList = ({achievement}) => {
  const getBg = (type) => {
      if(type === "contributer"){
        return {bg : "achOrangeLight", trophy : "achOrange"}
      }
      else if(type === "competitor"){
        return {bg : "achBlueLight", trophy : "achBlue"}
      }
      else if(type === "Learner"){
        return {bg : "achGreenLight", trophy : "achGreen"}
      }
      else{
        return {bg : "achPinkLight", trophy : "achPink"}
      }
  }

  const convertDate = () => {
    const date = moment().format('ll')
    let splited = date.split(' ')
    const dd = splited[1].split(',')[0] > 9 ? splited[1].split(',')[0] : `0${splited[1].split(',')[0]}`
    return `${dd} ${splited[0]} ${splited[2]}`
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-6 px-4 mx-auto">
      {
        achievement.map(each => {
          return(
          <div className={`flex flex-col p-4 bg-${getBg(each?.type)?.bg} rounded border`} key={each.id}>
            <div className="flex align-center pb-2.5">
              <div className={`bg-${getBg(each?.type)?.trophy} w-12 h-12 relative rounded border`}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-2 bottom-2.5">
                  <path d="M19.6766 23.4775L14 21.8369L8.32338 23.4775C8.27422 23.576 8.25781 23.6744 8.25781 23.7893V27.1799H19.7422V23.7893C19.7422 23.6744 19.7258 23.576 19.6766 23.4775Z" fill="#646D73"/>
                  <path d="M19.7422 27.1799V23.7893C19.7422 23.6744 19.7258 23.576 19.6766 23.4775L14 21.8369V27.1799H19.7422Z" fill="#474F54"/>
                  <path d="M27.1797 1.64062H22.9882C22.9954 1.36352 23.0234 1.1025 23.0234 0.820312C23.0234 0.360883 22.6626 0 22.2031 0H5.79688C5.33745 0 4.97656 0.360883 4.97656 0.820312C4.97656 1.1025 5.00462 1.36352 5.01173 1.64062H0.820312C0.366898 1.64062 0 2.00752 0 2.46094V4.53895C0 9.11925 3.66909 12.84 8.19071 13.0796C9.1327 14.3765 10.2507 15.339 11.5227 15.8812C11.3258 19.868 9.04531 22.6406 8.50396 23.2149C8.42188 23.2805 8.35625 23.3789 8.32344 23.4773H19.6766C19.6437 23.3789 19.5782 23.2805 19.4961 23.2149C18.9383 22.6406 16.6742 19.8844 16.4773 15.8812C17.7496 15.3389 18.8743 14.3762 19.8171 13.0787C24.3348 12.8353 28 9.11668 28 4.53895V2.46094C28 2.00752 27.6331 1.64062 27.1797 1.64062V1.64062ZM1.64062 4.53895V3.28125H5.08211C5.29501 5.99255 5.88295 8.86408 7.11867 11.3043C4.02117 10.6068 1.64062 7.84454 1.64062 4.53895V4.53895ZM26.3594 4.53895C26.3594 7.84284 23.981 10.6038 20.8858 11.3029C22.1117 8.86271 22.7029 6.01896 22.9179 3.28125H26.3594V4.53895Z" fill="#FED843"/>
                  <path d="M27.1797 1.64062H22.9882C22.9954 1.36352 23.0234 1.1025 23.0234 0.820312C23.0234 0.360883 22.6626 0 22.2031 0H14V23.4773H19.6766C19.6437 23.3789 19.5782 23.2805 19.4961 23.2149C18.9383 22.6406 16.6742 19.8844 16.4773 15.8812C17.7496 15.3389 18.8743 14.3762 19.8171 13.0787C24.3348 12.8353 28 9.11668 28 4.53895V2.46094C28 2.00752 27.6331 1.64062 27.1797 1.64062ZM26.3594 4.53895C26.3594 7.84284 23.981 10.6038 20.8858 11.3029C22.1118 8.86271 22.703 6.01896 22.9179 3.28125H26.3594V4.53895Z" fill="#FABE2C"/>
                  <path d="M15.3091 10.4343L14.0001 9.75418L12.6911 10.4343C12.4171 10.5753 12.0823 10.5521 11.8308 10.3702C11.5792 10.1876 11.4526 9.87837 11.5039 9.57234L11.7442 8.11514L10.6948 7.07936C10.4664 6.85667 10.3966 6.52652 10.4898 6.24144C10.5859 5.94662 10.8406 5.73033 11.1483 5.6839L12.6062 5.46438L13.2663 4.14499C13.5451 3.58904 14.4551 3.58904 14.7339 4.14499L15.394 5.46438L16.8519 5.6839C17.1596 5.73038 17.4143 5.94667 17.5104 6.24144C17.6066 6.53702 17.528 6.86148 17.3054 7.07936L16.256 8.11514L16.4963 9.57234C16.5476 9.87837 16.421 10.1876 16.1694 10.3702C15.9196 10.5513 15.5853 10.578 15.3091 10.4343V10.4343Z" fill="#FABE2C"/>
                  <path d="M15.309 10.4344C15.5853 10.5781 15.9195 10.5513 16.1693 10.3703C16.4209 10.1876 16.5475 9.8784 16.4962 9.57237L16.2559 8.11517L17.3053 7.07939C17.5279 6.86151 17.6065 6.53705 17.5103 6.24146C17.4142 5.94664 17.1595 5.73036 16.8518 5.68393L15.3939 5.46441L14.7338 4.14502C14.5944 3.86704 14.2972 3.72803 14 3.72803V9.75421L15.309 10.4344Z" fill="#FF9100"/>
                  <path d="M20.5625 28H7.4375C6.98409 28 6.61719 27.6331 6.61719 27.1797C6.61719 26.7263 6.98409 26.3594 7.4375 26.3594H20.5625C21.0159 26.3594 21.3828 26.7263 21.3828 27.1797C21.3828 27.6331 21.0159 28 20.5625 28Z" fill="#474F54"/>
                  <path d="M20.5625 26.3594H14V28H20.5625C21.0159 28 21.3828 27.6331 21.3828 27.1797C21.3828 26.7263 21.0159 26.3594 20.5625 26.3594Z" fill="#32393F"/>
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-lg font-bold leading-6">{each?.title}</p>
                <div className="flex items-center">
                  <img
                    className="mr-2"
                    src="/images/smallduck.svg"
                    alt="small duck"
                  />
                  <p className="text-lg font-bold leading-6 text-gray-600">{each?.points}</p>
                </div>
              </div>
            </div>
            <p className="text-sm leading-6 font-semibold pb-1 text-gray-800">{each?.description}</p>
            <div className="flex items-center w-full">
              <div className="flex-grow">
              <p className="text-sm leading-6 font-semibold text-gray-500">{convertDate()}</p>
              </div>
              {each?.isProgress && <div className="relative" style={{width : "72%"}}>
                <small className="absolute right-0 bottom-1 font-semibold text-gray-700">30%</small>
                <div className="h-1 bg-gray-200 rounded-full w-full">
                  <div className="bg-achOrange w-4/12 h-1 rounded-full"></div>
                </div>
              </div>}
            </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default AchievementList
