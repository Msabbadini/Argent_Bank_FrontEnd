import Typography from '../../atoms/typography'
import './index.css'

interface TransactionCardProps {
    title: string;
    amount: string;
    desc: string;
}

const TransactionCard = ({ title, amount, desc }: TransactionCardProps) => {
    return (
        <div className='transaction-card'>
            <div>
                <Typography component="p" variant="body-sm" >{title}</Typography>
                <Typography component="p" variant="h1" fontWeight="bold">{amount}</Typography>
                <Typography component="p" >{desc}</Typography>
            </div>
            <div>
                <button className='transaction-button' type='button'>View transactions</button>
            </div>
        </div>
    )
}

export default TransactionCard