// import { AnimatePresence } from "motion/react";
import "./CTABtnLayout.scss";
import Link from "next/link";
import CTABtn from "./CTABtn";
import Image from "next/image";
import GmailIcon from "@/assets/gmail.png";
import GithubIcon from "@/assets/github.png";
import LinkedinIcon from "@/assets/linkedin.png";
export default function CTABtnLayout() {
  return (
    <div className="cta-btn-layout-container">
      <CTABtn role="cert">
        <div className="illustration" />
        <div className="CTA-text">Constant Lifelong Learning</div>
      </CTABtn>
      <CTABtn role="project">
        <div className="illustration" />
        <div className="CTA-text">Range of Performance</div>
      </CTABtn>
      <CTABtn role="resume">
        <div className="illustration" />
        <div className="CTA-text">Get my Resume!</div>
      </CTABtn>
      <div className="connect-cta-container">
        <div className="CTA-text">Wanna Connect?</div>
        <div className="contact-methods">
          <div className="contact-text">Reach out to me via</div>
          <div className="contact-placeholder">
            <Link href="mailto:lammaituyen949@gmail.com">
              <Image src={GmailIcon} alt="my-mail"></Image>
            </Link>
            <Link href="https://www.linkedin.com/in/lmtuyen/">
              <Image src={LinkedinIcon} alt="my-linkedIn"></Image>
            </Link>
            <Link href="https://github.com/Ailey-Prmil">
              <Image src={GithubIcon} alt="my-gitHub"></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
