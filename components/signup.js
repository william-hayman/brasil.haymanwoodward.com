
import React, { useState, useEffect, useRef } from "react";
import styles from '@/styles/Signup.module.scss'
import { useRouter } from "next/router";

import useTranslation from 'next-translate/useTranslation'

import serviceListEn from '../locales/en/services.json'
import serviceListPt from '../locales/pt/services.json'

import xpListEn from '../locales/en/xp.json'
import xpListPt from '../locales/pt/xp.json'

import academicListEn from '../locales/en/academic.json'
import academicListPt from '../locales/pt/academic.json'

import incomeListEn from '../locales/en/income.json'
import incomeListPt from '../locales/pt/income.json'

import countryRListEn from '../locales/en/countryResidence.json'
import countryRListPt from '../locales/pt/countryResidence.json'

import countryListEn from '../locales/en/country.json'
import countryListPt from '../locales/pt/country.json'

// import countryList from '../data/country.json'
import langList from '../data/lang.json'

import 'react-phone-number-input/style.css'

import PhoneInput from 'react-phone-number-input'

export default function Signup({event, refer}) {

  const { t, lang } = useTranslation('common')

  const buttonRef = useRef(null);

  const router = useRouter()
  const { locale } = router 
  const [route, setRoute] = useState()

  const [serviceList, setServiceList] = useState({});
  const [xpList, setXpList] = useState({});
  const [academicList, setAcademicList] = useState({});
  const [countryList, setCountryList] = useState({});
  const [countryRList, setCountryRList] = useState({});
  const [incomeList, setIncomeList] = useState({});

  useEffect(() => {
    switch (locale) {
      case 'pt':
        setServiceList(serviceListPt)
        setXpList(xpListPt)
        setAcademicList(academicListPt)
        setCountryList(countryListPt)
        setCountryRList(countryRListPt)
        setIncomeList(incomeListPt)
      break;
      case 'en':
        setServiceList(serviceListEn)
        setXpList(xpListEn)
        setAcademicList(academicListEn)
        setCountryList(countryListEn)
        setCountryRList(countryRListEn)
        setIncomeList(incomeListEn)
      break;
    }
  })

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [migrateTo, setMigrateTo] = useState("");
  const [country, setCountry] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [academicBackground, setAcademicBackground] = useState("");
  const [timeExperience, setTimeExperience] = useState("");
  const [occupation, setOccupation] = useState("");
  const [language, setLanguage] = useState("");
  const [message, setMessage] = useState("");
  
  const [errors, setErrors] = useState({});

  let handleSubmit = async (e) => {
    e.preventDefault();
    buttonRef.current.disabled = true;

    let errors = {};

    const erroLng = {
      "required":t('required'),
      "email":t('validEmail'),
    }
    
    if (firstName.trim() === '') {
      errors.firstName = erroLng.required;
    }

    if (lastName.trim() === '') {
      errors.lastName = erroLng.required;
    }

    if (phone.trim() === '') {
      errors.phone = erroLng.required;
    }

    if (phone.length < 6) {
      errors.phone = erroLng.required;
    }

    if (email.trim() === '') {
      errors.email = erroLng.required;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = erroLng.email;
    }
    
    if (migrateTo.trim() === '') {
      errors.migrateTo = erroLng.required;
    }

    if (country.trim() === '') {
      errors.country = erroLng.required;
    }
    
    if (language.trim() === '') {
      errors.language = erroLng.required;
    }

    if (timeExperience.trim() === '') {
      errors.timeExperience = erroLng.required;
    }

    if (service.trim() === '') {
      errors.service = erroLng.required;
    }

    if (academicBackground.trim() === '') {
      errors.academicBackground = erroLng.required;
    }

    if (occupation.trim() === '') {
      errors.occupation = erroLng.required;
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      buttonRef.current.disabled = false;
      return;
    }


    else{

    

    try {
      let res = await fetch(process.env.urlApi, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Api-Token': process.env.token,
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          service: service,
          annualIncome: annualIncome,
          country: country,
          migrateTo: migrateTo,
          academicBackground: academicBackground,
          occupation: occupation,
          language: language,
          timeExperience: timeExperience,
          event: event,
          refer: refer,
        }),
      });
      let resJson = await res.json();
      if (res.status === 201) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setService("");
        setMigrateTo("");
        setAcademicBackground("");
        setTimeExperience("");
        setOccupation("");
        setLanguage("");
        setMessage("Cadastrado!");
        // router.push("complete")
        router.push({
          pathname: 'complete',
          query: { event: refer }
        })

      }
      else if(res.status === 401){
        // setMessage("¡No autorizado para el evento!");
        buttonRef.current.disabled = false;
      }      
      else {
        // setMessage("¡Hubo un error! ¿Has rellenado todos los datos correctamente?");
        buttonRef.current.disabled = false;
        
      }
    } catch (err) {
      console.log(err);
      buttonRef.current.disabled = false;
    }
    }

  };

  function handleTimeExperienceChange (event) {
    setTimeExperience(event.target.value)
  }
  function handleAcademicBackgroundChange (event) {
    setAcademicBackground(event.target.value)
  }
  function handleMigrateToChange (event) {
    setMigrateTo(event.target.value)
  }
  function handleServiceChange (event) {
    setService(event.target.value)
  }
  function handleLanguageChange (event) {
    setLanguage(event.target.value)
  }
  function handleAnnualIncomeChange (event) {
    setAnnualIncome(event.target.value)
  }
  function handleCountryChange (event) {
    setCountry(event.target.value)
  }

  return (
    <>
      <div className={styles.signup} id='about'>
        <div className='container'>
          <div className='row text-center text-md-start'>
            <div className='col-md-10 offset-md-1'>
                <h2>{t('register')}</h2>

                <form className="" onSubmit={handleSubmit}>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className={styles.blockForm}>
                        <label htmlFor="firstName" className="form-label">{t('firstName')}:</label>
                        <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} value={firstName} name="firstName" onChange={(e) => setFirstName(e.target.value)} required/>
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className={styles.blockForm}>
                        <label htmlFor="lastName" className="form-label">{t('lastName')}:</label>
                        <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} required/>
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className={styles.blockForm}>
                        <label htmlFor="email" className="form-label">{t('email')}:</label>
                        <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} value={email} name="email" onChange={(e) => setEmail(e.target.value)} required/>
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className={styles.blockForm}>
                        <label htmlFor="phone" className="form-label">{t('phone')}</label>
                        <PhoneInput
                        international
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        // placeholder="Enter phone number"
                        minLength={6}
                        defaultCountry="US"
                        value={phone}
                        onChange={setPhone}/>
                        <input type="hidden" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} value={phone} minLength={6} name="phone" onChange={(e) => setPhone(e.target.value)} required/>
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className={styles.blockForm}>
                        <label htmlFor="service" className="form-label">{t('howCanHelp')}</label>
                        <select className={`form-select ${errors.phone ? 'is-invalid' : ''}`} name="service" aria-label="service" onChange={handleServiceChange} required>
                          <option value=""></option>
                          {Object.entries(serviceList).map(([key, value]) => (
                            <option key={key} value={key}>
                              {value}
                            </option>
                          ))}
                        </select>
                        {errors.service && <div className="invalid-feedback">{errors.service}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className={styles.blockForm}>
                        <label htmlFor="migrateTo" className="form-label">{t('migrateTo')}</label>
                        <select className={`form-select ${errors.migrateTo ? 'is-invalid' : ''}`} name="migrateTo" aria-label="migrateTo" defaultValue={'DEFAULT'} onChange={handleMigrateToChange} required>
                          <option value="DEFAULT" disabled></option>
                          {Object.entries(countryList).map(([key, value]) => (
                            <option key={key} value={key}>
                              {value}
                            </option>
                          ))}
                        </select>
                        {errors.migrateTo && <div className="invalid-feedback">{errors.migrateTo}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className={styles.blockForm}>
                        <label htmlFor="academicBackground" className="form-label">{t('academicBackground')}</label>
                        <select className={`form-select ${errors.academicBackground ? 'is-invalid' : ''}`} name="academicBackground" aria-label="academicBackground" defaultValue={'DEFAULT'} onChange={handleAcademicBackgroundChange} required>
                          <option value="DEFAULT" disabled></option>
                          {Object.entries(academicList).map(([key, value]) => (
                            <option key={key} value={key}>
                              {value}
                            </option>
                          ))}
                        </select>
                        {errors.academicBackground && <div className="invalid-feedback">{errors.academicBackground}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className={styles.blockForm}>
                        <label htmlFor="timeExperience" className="form-label">{t('experience')}:</label>
                        <select className={`form-select ${errors.timeExperience ? 'is-invalid' : ''}`} name="timeExperience" aria-label="timeExperience" defaultValue={'DEFAULT'} onChange={handleTimeExperienceChange} required>
                          <option value="DEFAULT" disabled></option>
                          {Object.entries(xpList).map(([key, value]) => (
                            <option key={key} value={key}>
                              {value}
                            </option>
                          ))}
                        </select>
                        {errors.timeExperience && <div className="invalid-feedback">{errors.timeExperience}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className={styles.blockForm}>
                        <label htmlFor="country" className="form-label">{t('countryResidence')}</label>
                        <select className={`form-select ${errors.country ? 'is-invalid' : ''}`} name="country" aria-label="country" defaultValue={'DEFAULT'} onChange={handleCountryChange} required>
                          <option value="DEFAULT" disabled></option>
                          {Object.entries(countryRList).map(([key, value]) => (
                            <option key={key} value={key}>
                              {value}
                            </option>
                          ))}
                        </select>
                        {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className={styles.blockForm}>
                        <label htmlFor="annualIncome" className="form-label">{t('annualIncome')}:</label>
                        <select className={`form-select ${errors.annualIncome ? 'is-invalid' : ''}`} name="annualIncome" aria-label="annualIncome" defaultValue={'DEFAULT'} onChange={handleAnnualIncomeChange}>
                          <option value="DEFAULT" disabled></option>
                          {Object.entries(incomeList).map(([key, value]) => (
                            <option key={key} value={key}>
                              {value}
                            </option>
                          ))}
                        </select>
                        {errors.annualIncome && <div className="invalid-feedback">{errors.annualIncome}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className={styles.blockForm}>
                        <label htmlFor="occupation" className="form-label">{t('profession')}</label>
                        <input type="text" className={`form-control ${errors.occupation ? 'is-invalid' : ''}`} value={occupation} name="occupation" onChange={(e) => setOccupation(e.target.value)} required/>
                        {errors.occupation && <div className="invalid-feedback">{errors.occupation}</div>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className={styles.blockForm}>
                        <label htmlFor="language" className="form-label">
                        {t('language')}</label>
                        <select className={`form-select ${errors.language ? 'is-invalid' : ''}`} name="language" aria-label="language" defaultValue={'DEFAULT'} onChange={handleLanguageChange} required>
                          <option value="DEFAULT" disabled></option>
                          {Object.entries(langList).map(([key, value]) => (
                            <option key={key} value={key}>
                              {value}
                            </option>
                          ))}
                      </select>
                      {errors.language && <div className="invalid-feedback">{errors.language}</div>}
                    </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-gold" ref={buttonRef}>{t('exclusiveCta')}</button>
                  </div>

                </form>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
