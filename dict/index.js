var global = {
  en: {
    'lang': 'en',
    'page direction': 'ltr'
  },
  ar: {
    'lang': 'ar',
    'page direction': 'rtl'
  },
  fr: {
    'lang': 'fr',
    'page direction': 'ltr'
  }
}
var dicts = []

// login-signup

dicts['home'] = {
  'en': {
    '00 page title': 'React web (En)'
  },
  'ar': {
    '00 page title': 'React Web (Ar)'
  },
  'fr': {
    '00 page title': 'React Web (Fr)'
  }
}

dicts['auth'] = {
  'en': {
    '00 page title': 'React web (En)'
  },
  'ar': {
    '00 page title': 'React Web (Ar)'
  },
  'fr': {
    '00 page title': 'React Web (Fr)'
  }
}

dicts['profile'] = {
  'en': {
    '00 page title': 'Profile'
  },
  'ar': {
    '00 page title': 'الملف الشخصي'
  },
  'fr': {
    '00 page title': 'Profil'
  }
}

// merge all the dictionnaries:

var dict = global
for (const key in dicts) {
  if (dicts.hasOwnProperty(key)) {
    const pageDict = dicts[key]
    for (const langKey in pageDict) {
      if (pageDict.hasOwnProperty(langKey)) {
        const langDict = pageDict[langKey]
        for (const dictKey in langDict) {
          if (langDict.hasOwnProperty(dictKey)) {
            const dictPlacehodler = langDict[dictKey]
            dict[langKey][dictKey] = dictPlacehodler
          }
        }
      }
    }
  }
}

module.exports = dict
