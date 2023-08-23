import { Document, Page, View, Text } from "@react-pdf/renderer";

function ResumePDF({ generalInfo, workInfo, educationalInfo }) {
  return (
    <Document>
      <Page>
        <View>
          <Text>{generalInfo.fullName}</Text>
          <Text>{generalInfo.personalEmail}</Text>
          <Text>{generalInfo.phoneNumber}</Text>
        </View>
        <View>
          <Text>{workInfo.companyName}</Text>
          <Text>{workInfo.positionTitle}</Text>
          <Text>
            {workInfo.dateStarted} - {workInfo.dateEnded}
          </Text>
          <Text>{workInfo.listOfDuties}</Text>
        </View>
        <View>
          <Text>{educationalInfo.schoolName}</Text>
          <Text>{educationalInfo.schoolMajor}</Text>
          <Text>
            {educationalInfo.schoolStartDate} - {educationalInfo.schoolEndDate}
          </Text>
        </View>
      </Page>
    </Document>
  );
}
export default ResumePDF;
