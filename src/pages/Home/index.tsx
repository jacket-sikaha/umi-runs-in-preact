import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { DatePicker, PickerOption } from '@nutui/nutui-react';
import { useModel } from '@umijs/max';
import { useState } from 'react';
import { Cell1 } from './asd';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  const defaultValue = new Date();
  const defaultDescription = `${defaultValue.getFullYear()}-${
    defaultValue.getMonth() + 1
  }-${defaultValue.getDate()}`;
  const [show, setShow1] = useState(false);
  const [desc1, setDesc1] = useState(defaultDescription);

  const confirm1 = (values: (string | number)[], options: PickerOption[]) => {
    setDesc1(options.map((option) => option.text).join(' '));
  };

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
      <Cell1
        title="显示中文-非受控"
        description={desc1}
        onClick={() => setShow1(true)}
      />
      <DatePicker
        title="日期选择"
        visible={show}
        pickerProps={{
          popupProps: { zIndex: 1220 },
        }}
        defaultValue={new Date(`${defaultDescription}`)}
        showChinese
        onCancel={() => setShow1(false)}
        onConfirm={(options, values) => {
          setShow1(false);
          confirm1(values, options);
          console.log('onconfirm');
        }}
      />
    </PageContainer>
  );
};

export default HomePage;
