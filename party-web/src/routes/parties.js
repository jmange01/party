import { getUserParties } from "../lib/datafetchers/base"

export default function Parties(props) {
  var parties = getUserParties("")
  return (
    <div id="parties">
      { generatePartyList(parties) }
    </div>
  )
}

function generatePartyList(parties) {
  return parties.parties.map(
    (party) => partyRow(party)
  )
}

function partyRow(party) {
  return (
    <div className="party-row">
      <div className="party-header">
        <div className="party-name"> { party.name } </div>
        <div className="party-size"> { party.size }&#x1F464; </div>
      </div>

      <table className="meeting-schedule">
        <tr>
          <td className="next-meeting">
            <p> Next Meeting </p>
            <p> { party.nextMeeting } </p>
          </td>
          <td className="last-meeting">
            <p> Last Meeting </p>
            <p> { party.lastMeeting } </p>
          </td>
        </tr>
      </table>
    </div>
  )
}
