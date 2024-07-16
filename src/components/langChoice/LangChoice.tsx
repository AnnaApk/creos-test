import { FormControl, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ruFlag from '../../assets/icons8-russian-federation-30.png';
import enFlag from '../../assets/icons8-usa-30.png';


export function LangChoice() {

  const [ lang , setLang ] = useState<'RU' | 'EN'>('RU')

  const { t, i18n } = useTranslation();

  function handleChange(event: SelectChangeEvent<"RU" | "EN">) {
    const selectedLang = event.target.value as 'RU' | 'EN';
    setLang(selectedLang);
  }

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n])
  
  return (
    <FormControl variant="standard">
      <Select
        id="lang-select"
        value={lang}
        onChange={handleChange}
      >
        <MenuItem value='RU'>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img src={ruFlag} alt={t('ru flag')} />
            <Typography>Русский</Typography>
          </Stack>
        </MenuItem>
        <MenuItem value='EN'>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img src={enFlag} alt={t('en flag')} />
            <Typography>English</Typography>
          </Stack>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
