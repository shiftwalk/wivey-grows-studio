import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'

import {
  FiHome,
  FiCamera,
  FiSmile,
  FiUsers,
  FiFileText,
  FiMessageCircle,
  FiCalendar
} from 'react-icons/fi'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))).icon(FiHome),
      S.divider(),
      S.listItem().title('About Us').child(S.editor().id('about').schemaType('about').documentId('singleton-about').views(getPreview('about'))).icon(FiSmile),
      S.divider(),
      S.listItem().title('Growers').child(S.documentTypeList('growers').title('Growers')).icon(FiUsers),
      S.divider(),
      S.listItem().title('Calendar').child(S.editor().id('calendar').schemaType('calendar').documentId('singleton-calendar').views(getPreview('calendar'))).icon(FiCalendar),
      S.divider(),
      S.listItem().title('Blog').child(S.documentTypeList('blog').title('Blog')).icon(FiFileText),
      S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact').views(getPreview('contact'))).icon(FiMessageCircle),
    ]);