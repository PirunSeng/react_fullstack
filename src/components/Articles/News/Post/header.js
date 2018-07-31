import React from 'react'
import TeamInfo from '../../Elements/team_info'
import PostData from '../../Elements/post_data'

const Header = (props) => {

  const teamInfo = (teamData) => {
    return teamData ? (
      <TeamInfo team={teamData} />
    )
    : null;
  }

  const postData = (date, author) => (
    <PostData data={{date, author}} />
  )

  return(
    <div>
      { teamInfo(props.teamData) }
      { postData(props.date, props.author) }
    </div>
  )
}

export default Header;
