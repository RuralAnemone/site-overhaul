import Link from 'next/link';
import StaffCard from '@/components/StaffCard';
import Page from '@/components/Page';

import members from '@/config/members';
import minimizeName from '@/functions/util/minimizeName';

import styles from '@/styles/staff/Staff.module.css';

export default function Home() {
	return (
		<Page description="staff info page idk ***fill this out later***" title="Staff" h1="Staff Page" h2="about our staff">
			<div className={styles.cardContainer}>
				{members.map(member => (
					<StaffCard name={member.name} img={`${member.name}${member.deceased ? '-deceased' : ''}`} key="s">
						<p>{member.shortBio}</p>
					</StaffCard>
				))}
			</div>
		</Page>
	);
}
