
export function ProfileHeader(){
  return(
    <>
    <InformationProfile>
            <header>
              <h1>Caue Enrico</h1>
              <ExternalLink href="#">github <img src={link} /> </ExternalLink>
            </header>

            <p>
              {profileData.bio === 'null' ? profileData.bio : 'Não há descrição'}
            </p>

            <ul>
              <li><img src={github}/>{profileData.login}</li>
              {profileData.company ==='null' ?  <li><img src={company}/>{profileData.company}</li> : ''}
              <li><img src={followers}/>{profileData.followers} Seguidores </li>
            </ul>
          </InformationProfile> 
      </ProfileContainer>
    </>
  )
}