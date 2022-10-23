import "../css/notice.css"
import {Link} from 'react-router-dom'

export default function Notice() {
    return (
        <div className="notice-container">
            <div>
                <p>*NO PURCHASE NECESSARY. Participating stores only. Ends 10/23/22. To enter and for Official Rules, visit <Link to="/">starbucksstardays.com</Link>.</p>
                <p>Entrants can receive a maximum of 2 entries per day.</p>
            </div>
            <div>
                <p>**Excludes taxes and gratuities. At participating stores. Some restrictions apply. 150 Stars deposited after first qualifying Starbucks purchase. Flights purchased close to departure may not earn double Stars. Stars may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit <Link to="/">deltastarbucks.com/terms</Link></p>
            </div>
        </div>
    )
}