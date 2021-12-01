import { Logo } from "../../lib/icons/Brand"
import { Facebook, GitHub, Telegram } from "../../lib/icons/Social"
import style from "../../styles/welcome.module.scss"

const Footer = () => {
	return (
		<div className={style.footer}>
			<div className={style.footerLeft}>
				<Logo />
				<span>MYTC</span>
				<a href='https://github.com/GromZz'>
					<GitHub />
				</a>
				<a href='https://t.me/tarasenko10'>
					<Telegram />
				</a>
			</div>
			<div className={style.footerRight}>
				<span>
					Copyright © 2021{" "}
					<a href='https://github.com/GromZz'>Vlad Tarasenko</a>. All
					rights reserved.
				</span>
			</div>
		</div>
	)
}
export default Footer
